import React from "react";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = e => {
    e.preventDefault();
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value
    };
    this.props.addFish(fish);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          ref={this.nameRef}
        ></input>
        <input
          name="price"
          type="text"
          placeholder="Price"
          ref={this.priceRef}
        ></input>
        <select name="status" ref={this.statusRef}>
          <option value="Available"> Fresh! </option>
          <option value="Unavailable"> Sold Out! </option>
        </select>
        <textarea
          name="desc"
          type="text"
          placeholder="Desc"
          ref={this.descRef}
        ></textarea>
        <input
          type="text"
          name="image"
          placeholder="Image"
          ref={this.imageRef}
        ></input>
        <button type="submit"> +Add Fish </button>
      </form>
    );
  }
}
export default AddFishForm;
