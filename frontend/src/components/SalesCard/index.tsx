import NotificationButton from '../NotificationButton';
import './styles.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/request';
import { Sale } from '../../models/sale';

function SalesCard() {
    const max = new Date();
    const min = new Date(new Date().setDate(new Date().getDate() - 365)); //min da data 1 ano atrás

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);
    // declarando o dado e a função que muda o dado. o useState vai receber arg de data

    const [sales, setSales] = useState<Sale[]>([]); //setando um useState pra lista de vendas


    useEffect(() => {
        
        //tratando as datas como argumento
        const dmin = minDate.toISOString().slice(0, 10);
        const dmax = maxDate.toISOString().slice(0, 10);
                
        console.log(dmin);

        axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`)
            .then(response => {
                setSales(response.data.content);
                //essa é a famosa promise.
            });
    }, [minDate, maxDate]); //arg função e lista de dependencias - formata a lista quando muda o min e o max
    //esse é o front fazendo requisição no back

    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    {/* o datepicker precisa de uns tweaks pra poder alterar o dado de data no componente */}
                    {/* a forma correta de manter um estado dentro do componente é usando o React Hook useState */}
                    {/*  vem antes do return */}
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => { setMinDate(date) }} //pra mudar a data chamamos setmin/setmax passando a data que tá referenciada ali
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => { setMaxDate(date) }}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sales.map(sale => {
                                return (
                                    <tr key={sale.id}>
                                        <td className="show992">{sale.id}</td>
                                        <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                                        <td>{sale.sellerName}</td>
                                        <td className="show992">{sale.visited}</td>
                                        <td className="show992">{sale.deals}</td>
                                        <td>R$ {sale.amount.toFixed(2)}</td>
                                        <td>
                                            <div className="dsmeta-red-btn-container">
                                                <NotificationButton saleId={sale.id}/>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default SalesCard;