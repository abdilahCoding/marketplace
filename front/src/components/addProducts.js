import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from "react-redux";
import { addproduct } from "../actions/productActions";




function AddProducts(props) {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook


  const onSubmit = async (data) => {
           let id = JSON.parse(localStorage.getItem('seller'))
            let sellerId = id._id
            console.log(sellerId);
        let res = new FormData() 
             res.append('name',data.name)
             res.append('description',data.description)
             res.append('quantity',data.quantity)
             res.append('price',data.price)
             res.append('image',data.image[0])
             res.append('sellerItems',sellerId)
             console.log(res);
         
   let hh = props.addproduct(res)
     console.log(hh);
  
      
  
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" ref={register} /> 
      <input name="description" ref={register} />
      
      <input name="quantity" type='number' ref={register({ pattern: /\d+/ })} />
      <input name="price" type='number' ref={register({ pattern: /\d+/ })} />
      <input name="image" type="file"  ref={register({ required: true })} />
      <input type="submit" />
    </form>
  );
}

export default connect(null,{addproduct})(AddProducts);

// function AddProducts(props) {


//     const [name, setName] = useState();
//     const [description, setDescription] = useState();
//     const [price, setPrice] = useState();
//     const [img, setImg] = useState();
//     const [quantity, setquantity] = useState();
  
//     const send = event => {
//         // let data = new FormData();
//         // data.append("name", name);
//         // data.append("description", 'hhhhhhhhhhhhhhh');
//         // data.append("price", '22');
//         // data.append("image", img);
//         // data.append("quantity", '22');
         
//          let arr={
//              "name":"hhhddddddd"
//          }
    
//         let hh = props.addproduct(arr)
//     console.log(hh);
          
//       };





//     return (
//         <div>
//              <header className="App-header">
//         <form action="#">
//           <div className="flex">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               onChange={event => {
//                 const { value } = event.target;
//                 setName(value);
//               }}
//             />
//           </div>
//           <div className="flex">
//             <label htmlFor="file">File</label>
//             <input
//               type="file"
//               id="file"
//               accept=".jpg"
//               onChange={event => {
//                 const file = event.target.files[0];
//                 setImg(file);
//               }}
//             />
//           </div>
//         </form>
//         <button onClick={send}>Send</button>
//       </header>
//         </div>
//     )
// }
 











