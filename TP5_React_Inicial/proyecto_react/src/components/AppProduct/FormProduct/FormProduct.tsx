import { Button, Form } from 'react-bootstrap';
import { FC } from 'react';
import { useForm } from '../../../Hooks/useForm';

interface IPropsFormProduct {
    handleAddProduct : Function;

}

export const FormProduct : FC<IPropsFormProduct> = ({ handleAddProduct }) => {
    const {handleChange , values, resetForm } = useForm({
            nombre : '',
            imagen : '',
            precio : 0
        }
    ); 

    const handleSubmitForm = () => {
        handleAddProduct(values);
        resetForm();
    }

  return (
    <Form className='p-4 border rounded n-3'>
        <Form.Group controlId='formNombre'>
        <Form.Label>Nombre</Form.Label>
        <Form.Control type='text' name='imagen' placeholder='Ingrese el nombre del producto' value={values.nombre} 
        onChange={handleChange}>
        </Form.Control>
        </Form.Group>
        <Form className='p-4 border rounded n-3'>
        <Form.Group controlId='formNombre'>
        <Form.Label>Imagen</Form.Label>
        <Form.Control type='text' name='imagen' placeholder='Ingrese el imagen del producto' value={values.imagen} 
        onChange={handleChange}>
        </Form.Control>
        </Form.Group>
        <Form className='p-4 border rounded n-3'>
        <Form.Group controlId='formNombre'>
        <Form.Label>Precio</Form.Label>
        <Form.Control type='number' name='precio' placeholder='Ingrese el precio del producto' value={values.precio} 
        onChange={handleChange}>
        </Form.Control>
        </Form.Group>
        <div className='d-flex justify-content-center mt-4'>
        <Button variant = "primary" onClick={handleSubmitForm}>
        Enviar producto
        </Button>
        </div>

        </Form>
    </Form>
    </Form>
  )
}
