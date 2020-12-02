import React from 'react'
import RadioButton from "../Components/RadioButton";
import Insertar from "../Components/Insertar";
import './styles/BadgesList.css';
import { Link } from 'react-router-dom';
import api from '../api';
import VistasDocente from '../pages/VistasDocente';
import {
    Table,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
  } from "reactstrap";
 
class TablaHorario extends React.Component{
  state = {
    modalActualizar: false,
    modalInsertar: false,
    modalEliminar: false,
    form:{
      firstName:'',
      lastName:'',
      Email:'',
      jobTitle:'',
      twitter:'',
   },
    
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };
  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  handleChange = (e) => {
    this.setState({
      paymentMethod: "COD",
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleClick1 = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    this.setState({ modalActualizar: false });
    
    try {
      console.log(this.state.form);
      await api.badges.update(this.state.form.id, this.state.form);
     
      this.setState({ loading: false });
      
      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  handleClick3 = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    
    try {
      console.log(this.state.form);
      await api.badges.remove(this.state.form.id);
      this.setState({ loading: false });
      this.setState({modalEliminar: false});
      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
	radioChangeHandler = (event) => {

		this.setState({
			paymentMethod: event.target.value
		});
	}
  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };
  mostrarModalEliminar = (dato) => {
    this.setState({
      
      form: dato,
      
      modalEliminar: true,
    });
     
  };
  
  mostrarModalActualizar = (dato) => {
    this.setState({
      
      form: dato,
      
      modalActualizar: true,
    });
   
  };
  editar = () => {
  
    this.setState({ modalActualizar: false });
  };
  componentDidMount(){
    this.fetchData()
   }
   fetchData=async () => {
      this.setState({loading:true,error:null})
 
      try{
       const data=await api.badges.list();
       this.setState({loading:false,data:data})
      }catch(error){
       this.setState({loaSding:false,error:error})
      }
   }
  handleClick2 = async e => {
    e.preventDefault();

    this.setState({ loading: true, error: null });

    try {
      
      console.log(this.props.formValues);

      await api.badges.create(this.state.form);
      this.props.shareMethods();
      this.setState({modalInsertar: false});
      this.setState({ loading:false });
      
      
      
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
render(){
 
    return(
      <>
<Container >
         
        <br />
        
         <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
        
          <br />
          <br />
        <div class="table-wrapper-scroll-y my-custom-scrollbar">

          <Table class="table table-bordered table-striped mb-0">
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Aula</th>
                <th>Horario</th>
                <th>Estado</th>
              </tr>
            </thead>

            <tbody>
              {this.props.valor.map((data) => (

                      
                        <tr key={data.id}>
                          
                          <td>{data.firstName}</td>
                         
                          <td>{data.firstName}</td>
                          <td>{data.firstName}</td>
                          <td>{data.firstName}</td>
                          <td>
                      
                          <Button
                            color="btn btn-primary"
                            onClick={() => this.mostrarModalActualizar(data)}
                          >
                            Reservar
                          </Button> {" "}
                      
                          <Button color="btn btn-info" onClick={this.handleClick3}>Editar</Button>
                          {" "}
                          <Button color="btn btn-danger" onClick={() => this.mostrarModalEliminar(data)}>Eliminar</Button>
                         
                         
                        </td>
                          </tr>
              ))}
            </tbody>
          </Table>
          </div>
        </Container>
       <Modal   isOpen={this.state.modalActualizar}>
       <ModalHeader>
        <div><h3>Editar Registro</h3></div>
       </ModalHeader>

       <ModalBody>
         <FormGroup>
           <label>
            Id:
           </label>
         
           <input
             className="form-control"
             readOnly
             type="text"
             value={this.state.form.id}
           />
         </FormGroup>
         <FormGroup>
           <label>
            Aula:
           </label>
         
           <input
             className="form-control"
             readOnly
             type="text"
             value={this.state.form.firstName}
           />
         </FormGroup>
         <FormGroup>
         <div className="radio-btn-container" style={{ display: "flex" }}>
					
					<RadioButton 
						changed={ this.radioChangeHandler } 
            id="1" 
            name="lastName"
            type="text"
            onChange={this.handleChange}
						isSelected={ this.state.paymentMethod === "QuickPay" } 
						label="Ocupado" 
						value="QuickPay" 
					/>

					<RadioButton 
						changed={ this.radioChangeHandler } 
            id="2"
            name="lastName" 
            onChange={this.handleChange}
						isSelected={ this.state.paymentMethod === "COD" } 
						label="Disponible" 
						value="COD" 
					/>
         
				</div>
        
       </FormGroup>
         </ModalBody>
         <ModalFooter>
      
            <Button
              
              color="primary"
              onClick={this.handleClick1}
            >
                 <Link  className="text-reset text-decoration-none" to="/badges/Reservar">
              Reservar
              </Link>
            </Button>
           
            <Button

              color="danger"
              onClick={() => this.cerrarModalActualizar()}
              
            >
              Cancelar
            </Button>
          </ModalFooter>
         </Modal>
         <Modal isOpen={this.state.modalInsertar}>
         <ModalHeader>
           <div><h3>Insertar Personaje</h3></div>
          </ModalHeader>
          <Insertar 
          onChange={this.handleChange}
          formValues={this.state.form}
          />
         <ModalFooter>
         <Link
                  className="text-reset text-decoration-none"
                  to={`/badges/Reservar`}>
            <Button
              color="primary"
              onClick={this.handleClick2}
            >
              Insertar
            </Button>
            </Link>
            <Button
              className="btn btn-danger"
              
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.modalEliminar}>
          <ModalHeader>
           <div><h3>Insertar Personaje</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Estas seguro de Eliminar? 
              </label>
              
              <input
                  className="form-control"
                  readOnly
                  type="text"
                  value={this.state.form.firstName}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={this.handleClick3}
            >
              Aceptar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
         </>

    );
}

}
export default TablaHorario;