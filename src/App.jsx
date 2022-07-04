import './App.css';

function App() {
    return(
        <div className='mainbox'>
            <div className='ciano'>
                <button className='processos'>Processos</button>
                <button className='contratos'>Contratos</button>
            </div>
            <br></br>
            <div className='darkblue'>
                <button className='despesas'>Licitações e Compras Diretas</button>
            </div>
            <br></br>
            <div className='verde'>
                <button className='rfs'>Receitas Federais</button>
                <button className='res'>Receitas Estaduais</button>
            </div>
            <br></br>
            <div className='vermelho'>
                <button className='empenhos'>Empenhos</button>
                <button className='liquida'>Liquidações</button>
                <button className='paga'>Pagamentos</button></div>
        </div>

    );
}

export default App;