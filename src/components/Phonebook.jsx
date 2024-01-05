import { Component } from "react"

export class Phonebook extends Component {

    onSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        this.props.onAdd({
            name: form.elements.name.value,
            number: form.elements.number.value,
        })
        form.reset();
    }

    render = () => (
        <form onSubmit={this.onSubmit}>
            <div>
                <label>Name</label>
                <input type="text" required="true" name="name" />
            </div>
            <div>
                <label>Phone Number</label>
                <input type="tel" required="true" name="number" />
            </div>
            <button type="submit">Add</button>
        </form>
      )

}