import React from 'react';
import ProjectIndexItem from './project_index_item';
import { Route } from 'react-router-dom';

class ProjectIndex extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    return (
      <section className="projects-index">
        <div className="projects-index-content">
          <h2>Featured Projects</h2>
          <ul className="projects">
            {this.props.projects.map(
              project => <ProjectIndexItem key={project.id} project={project} />
            )}
          </ul>
        </div>
      </section>
    );
  }
}

export default ProjectIndex;

// class PokemonIndex extends Component {
//   componentDidMount() {
//     this.props.requestAllPokemon();
//   }
//
//   render() {
//     const { pokemon, loading } = this.props;
//     return (
//       loading ?
//       <LoadingIcon /> :
//       <section className="pokedex">
//         <ul>
//           {pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />)}
//         </ul>
//
//         <Route exact path="/" component={PokemonFormContainer} />
//         <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
//       </section>
//     );
//   }
// }
