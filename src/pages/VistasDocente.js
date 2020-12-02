import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import api from '../api';
import './styles/Badges.css';
import RadioButton from "../Components/RadioButton";
import Insertar from '../Components/Insertar';
import Editar from '../Components/Editar';
import Editar1 from '../Components/Editar1';
import PageLoader from '../Components/PageLoading';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faSearch } from "@fortawesome/free-solid-svg-icons";
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

class VistasDocente extends React.Component {
  
  state = {
    loading: true,
    error: null,
    data:undefined,
    dataP:undefined,
    modalActualizar: false,
    modalActualizar1: false,
    modalInsertar: false,
    modalEliminar: false,
    busqueda: '',
    form: {
      id_horario: '',
      aula: '',
      curso: '',
      dia: '',
      hora_inicio: '',
      hora_fin: '',
    },
    forma: {
      id_curso: '',
      nombre: '',
      dia: '',
      hora_inicio: '',
      hora_fin: '',
      escuela :'',
     
    },
    forma1: {
      id_aula: '',
      capacidad: '',
      estado: '',
     
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
      forma: {
        ...this.state.forma,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleChange1 = (e) => {
    this.setState({
      paymentMethod: "COD",
      forma1: {
        ...this.state.forma1,
        [e.target.name]: e.target.value,
      },
    });
  };



  handleClick1 = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    this.setState({ modalActualizar: false });
    
    try {
      
      this.state.form.aula.estado= this.state.paymentMethod;
      //this.state.form.curso.nombre= "Algoritmo I";
     
      this.state.form.curso=this.state.forma;
      console.log(this.state.forma);
      await api.badges.update1(this.state.form.curso.id_curso, this.state.form.curso);
      await api.badges.update(this.state.form.aula.id_aula, this.state.form.aula);
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleClick4 = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    this.setState({ modalActualizar1: false });
    
    try {
      
      this.state.form.aula.capacidad= this.state.forma1.capacidad;
      //this.state.form.curso.nombre= "Algoritmo I";
     
      this.state.form.curso=this.state.forma;
     
      console.log(this.state.forma1.id_aula);
      await api.badges.update1(this.state.forma.id_curso, this.state.forma);
      await api.badges.update(this.state.forma1.id_aula, this.state.forma1);
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };




  handleClick3 = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    this.setState({ modalEliminar: false });
    try {
      console.log(this.state.form);
     
     
      await api.badges.remove2(this.state.form.id_horario);
      this.setState({modalEliminar: false});
      const data=await api.badges.list();
      this.setState({loading:false,dataP:data})
      this.setState({loading:false,data:data})
  
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

  cerrarModalActualizar1 = () => {
    this.setState({ modalActualizar1: false });
  };

  mostrarModalEliminar = (dato) => {
    this.setState({
      
      form: dato,
      forma:dato.curso,
      forma1:dato.aula,
      modalEliminar: true,
    });
     
  };
  
  mostrarModalActualizar = (dato) => {
    this.setState({
      
      form: dato,
      forma:dato.curso,
      modalActualizar: true,
    });
   
  };
  mostrarModalActualizar1 = (dato) => {
    this.setState({
      
      form: dato,
      forma:dato.curso,
      forma1:dato.aula,
      modalActualizar1: true,
    });
   
  };
  editar = () => {
  
    this.setState({ modalActualizar: false });
  };

  editar = () => {
  
    this.setState({ modalActualizar1: false });
  };


  


  handleClick2 = async e => {
    e.preventDefault();

    this.setState({ loading: true, error: null });

    try {
      

      await api.badges.create(this.state.form);
      this.setState({modalInsertar: false});
      const data=await api.badges.list();
      this.setState({loading:false,dataP:data})
      this.setState({ loading:false });
      
      
      
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  onChange1=async e=>{
    e.persist();
    await this.setState({busqueda: e.target.value});
    this.filtrarElementos();
  }


  filtrarElementos=()=>{
    var search=this.state.data.filter(item => {
      if(item.aula.id_aula.toString().includes(this.state.busqueda) 
         
      
      ){
        return item;
      }
    });
    this.setState({dataP: search});
  }

  componentDidMount(){
   this.fetchData()
  }
  fetchData=async () => {
     this.setState({loading:true,error:null})

     try{
      const data=await api.badges.list();
      console.log(data);
      this.setState({loading:false,dataP:data})
      this.setState({loading:false,data:data})
     }catch(error){
      this.setState({loaSding:false,error:error})
     }
  }
 
  render() {
    if (this.state.loading){
      return <PageLoader />
    }
    return (
         <>
      <div className="home">
       <div class="field" id="searchform">
          <input 
           type="text"
           id="searchterm"
           placeholder="Buscar"
           className=""
           value={this.state.busqueda}
           onChange={this.onChange1}/>
          <button type="button" id="search">Buscar!</button>
        </div>
        <script class="cssdeck" src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
      <Container >
               
              <br />
              
               <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
              
                <br />
                <br />
              <div class="table-wrapper-scroll-y my-custom-scrollbar">
      
                <Table className="table table-bordered table-hover  ">
                  <thead className="table-dark ">
                    <tr>
                      
                      <th>Aula</th>
                      <th>Curso</th>
                      <th>Escuela</th>
                      <th>Horario</th>
                      <th>Horario Inicio</th>
                      <th>Horario Fin</th>
                      <th>Estado</th>
                      <th>Aforo</th>
                      <th className="text-center">Opciones</th>
                    </tr>
                  </thead>
      
                  <tbody tbody className="table-light">
                    {this.state.dataP.map((data1) => (
      
                             
                              <tr  key={data1.id_horario}>
                                
                                
                                <td>{data1.aula.id_aula}</td>
                                <td>{data1.curso.nombre !=null?data1.curso.nombre:"-----"}</td>
                                <td>{data1.curso.escuela !=null?data1.curso.escuela :"----"}</td>
                                <td>{data1.curso.dia !=null?data1.curso.dia:"-----"}</td>
                                <td>{data1.curso.hora_inicio !=null?data1.curso.hora_inicio:"----"}</td>
                                <td>{data1.curso.hora_fin !=null?data1.curso.hora_fin:"----"}</td>
                                <td>{data1.aula.estado}</td>
                                <td>{data1.aula.capacidad}</td>
                               
                                <td>
                            
                                <Button
                                  color="btn btn-primary"
                                  onClick={() => this.mostrarModalActualizar(data1)}
                                >
                                  Reservar
                                </Button> {" "}
                            
                                <Button color="btn btn-info" className="btn btn-default" onClick={() => this.mostrarModalActualizar1(data1)}>
                                <span className="glyphicon glyphicon-floppy-open"></span> Editar</Button>
                                {" "}
                                <Button color="btn btn-danger" onClick={() => this.mostrarModalEliminar(data1)}>Eliminar</Button>
                               
                               
                              </td>
                                </tr>
                    ))}
                  </tbody>
                </Table>
                </div>
              </Container>
             </div>
             <Modal   isOpen={this.state.modalActualizar}>
             <ModalHeader>
              <div><h3>Reservar Registro</h3></div>
             </ModalHeader>
      
             <ModalBody>
             <FormGroup>
                <label>
                Codigo:
                </label>
              
                <input
                  className="form-control"
                  readOnly
                  type="text"
                  value={this.state.form.aula.id_aula}
                />
              </FormGroup>
               <Editar
                onChange={this.handleChange}
                formValues={this.state.forma}/>
               <FormGroup>
               <div className="radio-btn-container" style={{ display: "flex" }}>
                
                <RadioButton 
                  changed={ this.radioChangeHandler } 
                  id="1" 
                  name="lastName"
                  type="text"
                  onChange={this.handleChangeOcupado}
                  isSelected={ this.state.paymentMethod === "Ocupado" } 
                  label="Ocupado" 
                  value="Ocupado" 
                />
      
                <RadioButton 
                  changed={ this.radioChangeHandler } 
                  id="2"
                  name="lastName" 
                  type="text"
                  onChange={this.handleChange}
                  isSelected={ this.state.paymentMethod === "Disponible" } 
                  label="Disponible" 
                  value="Disponible" 
                />
               
              </div>
              
               </FormGroup>
               </ModalBody>
               <ModalFooter>
                  
                  <Button
                    
                    color="primary"
                    onClick={this.handleClick1}
                  >
                      
                    Reservar
                   
                  </Button>
                 
                  <Button
      
                    color="danger"
                    onClick={() => this.cerrarModalActualizar()}
                    
                  >
                    Cancelar
                  </Button>
                </ModalFooter>
               </Modal>


               <Modal   isOpen={this.state.modalActualizar1}>
             <ModalHeader>
              <div><h3>Editar Registro</h3></div>
             </ModalHeader>
              
             <ModalBody>
             <FormGroup>
                <label>
                Codigoee:
                </label>
              
                <input
                  className="form-control"
                  readOnly
                  type="text"
                  value={this.state.form.aula.id_aula}
                />
              </FormGroup>
               <Editar1
                onChange={this.handleChange}
                formValues={this.state.forma}/>
               <FormGroup>
                <label>
                 Aforo:
                </label>
              
                <input
                  className="form-control"
                  name="capacidad"
                  type="text"
                  onChange={this.handleChange1}
                  value={this.state.forma1.capacidad}
                />
              </FormGroup>
             
               </ModalBody>

               <ModalFooter>
            
                  <Button
                    
                    color="primary"
                    onClick={this.handleClick4}
                  >
                      
                    Editar
                   
                  </Button>
                 
                  <Button
      
                    color="danger"
                    onClick={() => this.cerrarModalActualizar1()}
                    
                  >
                    Cancelar
                  </Button>
                </ModalFooter>
               </Modal>


               <Modal isOpen={this.state.modalInsertar}>
               <ModalHeader>
                 <div><h3>Insertar Aula</h3></div>
                </ModalHeader>
                <Insertar 
                onChange={this.handleChange}
                formValues={this.state.form}
                />
               <ModalFooter>
               
                  <Button
                    color="primary"
                    onClick={this.handleClick2}
                  >
                    Insertar
                  </Button>
                  
                  <Button
                    className="btn btn-danger"
                    
                  >
                    Cancelar
                  </Button>
                </ModalFooter>
              </Modal>
              <Modal isOpen={this.state.modalEliminar}>
                <ModalHeader>
                 <div><h3>Insertar</h3></div>
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
                        value={this.state.form.aula.id_aula}
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
export default VistasDocente;
