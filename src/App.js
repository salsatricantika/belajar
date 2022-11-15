// import React, { Component } from 'react'
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nama: 'RPL',
//       jumlah: 0
//     }
//   }

//   ubah_state = () => {
//     this.setState({ nama: 'Rekayasa Perangkat Lunak' })
//   }

//   tambah = () => {
//     this.setState({ jumlah: this.state.jumlah + 1 });
//   }
//   kurang = () => {
//     if (this.state.jumlah > 0) {
//       this.setState({ jumlah: this.state.jumlah - 1 });
//     }
//   }


//   render() {
//     return (
//       <>
//         {/* <h1>{this.state.nama}</h1>
//         <button onClick={this.ubah_state}>Ubah</button> */}

//         <h1>{this.state.jumlah}</h1>
//         <button onClick={this.tambah}>Tambah</button>
//         <button onClick={this.kurang}>Kurang</button>
//       </>
//     );
//   }
// }

// export default App;



































































// import React, { Component } from 'react'

// function Biodata() {
//   return (
//     <>
//       <table>
//         <Baris label="Nis" isi="123" />
//         <Baris label="Nama" isi="Susi" />
//         <Baris label="Jurusan" isi="Rpl" />
//       </table>
//     </>
//   );
// }

// function Hello(props) {
//   return (<h1>Hello {props.nama}</h1>);
// }

// function Baris(props) {
//   return (
//     <>
//       <tr>
//         <td>{props.label}</td>
//         <td>:</td>
//         <td>{props.isi}</td>
//       </tr>
//     </>
//   );
// }


// class App extends Component {
//   render() {
//     return (
//       <>
//         <Biodata />
//       </>
//     );
//   }
// }


// export default App;

import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Gambar from '.././src/images/gb3.jpg'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { judul: "Set PinkFlash", harga: 115000, jumlah: 0, total: 0 }
  }

  tambah = () => {
    this.setState({
      jumlah: this.state.jumlah + 1,
      total: (this.state.jumlah + 1) * this.state.harga
    });
  }
  kurang = () => {
    if (this.state.jumlah > 0) {
      this.setState({
        jumlah: this.state.jumlah - 1,
        total: (this.state.jumlah - 1) * this.state.harga
      });
    }
  }

  render() {
    return (
      <>
        <Kartu judul={this.state.judul} harga={this.state.harga} />
        <div className='m-5 card'>
          <div className='card-body'>
            <div className='row'>
              <div className='col'>
                <button onClick={this.kurang} className='btn btn-primary'>-</button>
              </div>
              <div className='col'>
                <input type="text" className='form-control' value={this.state.jumlah} />
              </div>
              <div className='col'>
                <button onClick={this.tambah} className='btn btn-primary'>+</button>
              </div>
            </div>
            <hr />
            <h6 className='text-center mt-3'>Total : Rp {this.state.total}</h6>
          </div>
        </div>
      </>
    );
  }
}


function Kartu(props) {
  return (
    <>
      <div className='card m-5'>
        <img src={Gambar} class="card-img-top" alt="..." />
        <div className='card-body'>
          <h5 className="card-title"> {props.judul}</h5>
          <p className="text-danger"><b>Rp {props.harga}</b></p>
          <hr />


        </div>
      </div>
    </>
  );
}

export default App;