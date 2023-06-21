//import layout
import React, { useState, useEffect } from "react";

//import layout web
import LayoutWeb from "../../../layouts/Web";

//import Slider component
import Slider from '../../../components/web/Slider';

//import BASE URL API
import Api from "../../../api";

//import cart category component
import CardCategory from "../../../components/utilities/CardCategory";

//import react router dom
import { useHistory } from "react-router-dom";

function Home() {

    //title page
    document.title = "TRAVEL GIS - Website Wisata Berbasis GIS (Geographic Information System)";
    
    //history
    const history = useHistory();

    //state categories
    const [categories, setCategories] = useState([]);

    //state keyword
    const [keyword, setKeyword] = useState("");

    //function "fetchDataCategories"
    const fetchDataCategories = async () => {

        //fetching Rest API
        await Api.get('/api/web/categories')
            .then((response) => {

                //set data to state
                setCategories(response.data.data)
            })
    }

    //hook
    useEffect(() => {

        //call function "fetchDataCategories"
        fetchDataCategories();

    }, []);

    //function "searchHandler"
    const searchHandler = () => {

      //redirect with params "keyword"
      history.push(`/search?q=${keyword}`);
    }

    return (
        <React.Fragment>
          <LayoutWeb>
      
            <Slider />

            <div className="container mb-4">
            <div className="row mt-minus-87">
                <div className="col-md-12">
                  <div className="card border-0 rounded shadow-sm">
                    <div className="card-body">
                      <h5>
                        <i className="fa fa-map-marked-alt"></i> AYO DOLAN
                      </h5>
                      <p>
                        AYO DOLAN adalah Aplikasi Sistem Informasi Geografis berbasis website yang memuat informasi lokasi wisata di Kota Yogyakarta.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              
            <div className="container mb-5">
              <div className="row mt-minus-88">
                <div className="col-md-12">
                  <div className="card border-0 rounded shadow-sm">
                    <div className="card-body">
                      <h5>
                        <i className="fa fa-search"></i> CARI WISATA DI KOTA YOGYAKARTA
                      </h5>
                      <p>
                        Temukan tempat wisata liburanmu di Kota Yogyakarta
                      </p>
                      <hr />
                      <input type="text" className="form-control" value={keyword} onChange={(e) => setKeyword(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && searchHandler()} placeholder="Cari tujuanmu disini..." />
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="row justify-content-center mt-4">
                {
                    categories.map((category) => (
                        <CardCategory 
                          key={category.id}
                          id={category.id} 
                          name={category.name} 
                          slug={category.slug} 
                          image={category.image} 
                        />
                    ))
                }
              </div>

              <div className="container mb-5">
            <div className="row mt-minus-88">
                <div className="col-md-12">
                  <div className="card border-0 rounded shadow-sm">
                  <div className="card-body">
                    <div className="row">

                       <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase"> <i className="fa fa-map-marked-alt"></i> About AYO DOLAN
        </h5>
                      <p class= "text-left">Prototype ini dibuat oleh <br/> 
    Donatea Laksita Dewari Kusuma<br/>
    alamat email : donatealaksita@gmail.com </p>
      </div>

      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase"> <br/>  </h5>

        <p>
          Aplikasi Sistem Informasi Geografis ini berupa prototype dan dibuat untuk uji coba. Sistem Informasi ini dibuat sebagai projek tugas akhir pada Program Studi Teknik Geomatika UPN "Veteran" Yogyakarta tahun 2023.
        </p>
      </div>

      <hr></hr>
    <p class= "text-center">
    © 2022 Copyright <br/> </p>

                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            </div>

          </LayoutWeb>
        </React.Fragment>
    );
}

export default Home;