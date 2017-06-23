<form>
<input
      type="text"
      value={this.state.title}
      placeholder="Title"
      onChange={this.update('title')}
    />
    <input
      type="text"
      value={this.state.image_url}
      placeholder="Image Url"
      onChange={this.update('image_url')}
    />
    <select
      value={this.state.type}
      onChange={this.update('poke_type')}
      defaultValue="Select Pokemon Type">
      {POKEMON_TYPES.map((type, i) => {
        return <option value={type} key={i}>{type}</option>;
      })}
    </select>
    <input
      type="number"
      value={this.state.attack}
      placeholder="Attack"
      onChange={this.update('attack')}
    />
    <input
      type="number"
      value={this.state.defense}
      placeholder="Defense"
      onChange={this.update('defense')}
    />
    <input
      type="text"
      id="move_1"
      value={this.state.moves.move_1 || ''}
      placeholder="Move 1"
      onChange={this.updateMoves}
    />
    <input
      type="text"
      id="move_2"
      value={this.state.moves.move_2 || ''}
      placeholder="Move 2"
      onChange={this.updateMoves}
    />
</form>
