import React from 'react'; 
import {StoreContext} from '../../state/StoreContext';

import './Form.style.scss'

class Form extends React.Component {
    static contextType = StoreContext;

    state = {
        name: this.props.location.search === '?isEditing' ? this.context.selectedValue.name : '',
        image: this.props.location.search === '?isEditing' ? this.context.selectedValue.image : '',
        description: this.props.location.search === '?isEditing' ? this.context.selectedValue.description : '',
        price: this.props.location.search === '?isEditing' ? this.context.selectedValue.price : '',
        stock: this.props.location.search === '?isEditing' ? this.context.selectedValue.stock : '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault(); 
        if(this.props.location.search === '?isEditing') {
           this.context.editProduct(this.state, this.context.selectedValue.id);
        } else {
            this.context.addProduct(this.state);
        }
        this.reset();
        this.props.history.push('/admin');
    }

    handleCancel = e => {
        e.preventDefault();
        this.reset();
    }

    reset = () => {
        this.setState({
            name: '',
            image: '',
            description: '',
            price: '',
            stock: ''
        });
    }

    render() {

        const { name, description, price, stock, image } = this.state;

        return( 
            <form className='Form'>
                <div className="Form-header-group">
                    <h2>Add Product</h2> 
                    <div className="btn-section">
                        <button className='btn save' onClick={this.handleSubmit}>+ Save</button>
                        <button className='btn cancel'onClick={this.handleCancel}>Cancel</button>
                    </div>
                </div>

                <input name='name' value={name} onChange={this.handleChange} type="text" placeholder='name'/>
                <input name='image' value={image} onChange={this.handleChange} type="text" placeholder='image'/>
                <input name='description' value={description} onChange={this.handleChange} type="text" placeholder='description'/>
                <input name='price' value={price} onChange={this.handleChange} type="text" placeholder='price'/>
                <input name='stock' value={stock} onChange={this.handleChange} type="text" placeholder='stock'/>
            </form>
        )
    }

}

export default Form; 