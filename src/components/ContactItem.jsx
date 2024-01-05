export const ContactItem = ({id, name, number, onDelete}) => (
    <li>
        {name}: {number}
        <button type="button" onClick={e=>onDelete(id)}>Delete</button>
    </li>
)