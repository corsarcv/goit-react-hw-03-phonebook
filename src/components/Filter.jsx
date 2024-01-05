export const Filter = ({onFilter}) => (
    <div>
        <h2>Filter</h2>
        <input name="filter" onChange={(e)=>{onFilter(e.target.value)}}></input>
    </div>
)