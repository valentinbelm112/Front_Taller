import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import api from '../api';
import './styles/Badges.css';
import PageLoader from '../Components/PageLoading';

import {
  Table,
  Container,
} from "reactstrap";


class Home extends React.Component{

  state = {
    loading: true,
    error: null,
    data:undefined,
    dataP:undefined,
    busqueda: '',
  }

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

  render(){
    if (this.state.loading){
      return <PageLoader />
    }
    return(
      //console.log(this.state.data),
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

      <Container>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
          <div class="table-wrapper-scroll-y my-custom-scrollbar">
            <Table className="table table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Aula</th>
                  <th>Curso</th>
                  <th>Horario</th>
                  <th>Horario Inicio</th>
                  <th>Horario Fin</th>
                  <th>Escuela</th>
                  <th>Estado</th>
                  <th>Aforo</th>
                </tr>
              </thead>
              <tbody className="table-light">
                {
                  this.state.dataP.map((data) => (
                    <tr key={data.aula.id_aula}>
                      <td>{data.aula.id_aula}</td>
                      <td>{data.curso.nombre !=null?data.curso.nombre:"-----"}</td>
                      <td>{data.curso.dia !=null?data.curso.dia:"-----"}</td>
                      <td>{data.curso.hora_inicio !=null?data.curso.hora_inicio:"----"}</td>
                      <td>{data.curso.hora_fin !=null?data.curso.hora_fin:"----"}</td>
                      <td>{data.curso.escuela !=null?data.curso.escuela:"----"}</td>
                      <td>{data.aula.estado}</td>
                      <td>{data.aula.capacidad}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
      </div>
    );
  }
}

export default Home;