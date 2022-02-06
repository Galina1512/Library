function Buttons({anyword}){
    return(
        <div className="cont">
            <button onClick={()=>anyword('poems')} className="change">Стихи</button>
            <button onClick={()=>anyword('fantasy')} className="change">Фантастика</button>
            <button onClick={()=>anyword('fable')} className="change">Сказки</button>
            <button onClick={()=>anyword('memoris')} className="change">Мемуары</button>
            <button onClick={()=>anyword('detectiv')} className="change">Детективы</button>

        </div>
    )
}
export default Buttons;

