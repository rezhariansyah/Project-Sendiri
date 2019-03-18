import React from 'react';
import '../support/css/footer.css';


class Footer extends React.Component {

    render () {
        return (
            <div>               
                <div className="footer">
                    <div className='row'>
                        <div className='container'>
                            <div className='col-md-auto' className='caption'>
                                <p className='mb-0'>&copy; 2019 Rezha Riansyah. All right reserved</p>
                                <a href="/"><i class="fab fa-facebook-square"></i></a>
                                <a href="/"><i class="fab fa-twitter"></i></a>
                                <a href="/"><i class="fab fa-google-plus-square"></i></a>
                                <a href="/"><i class="far fa-envelope-open"></i></a>
                                <a href="/"><i class="fab fa-instagram"></i></a>                                
                            </div>
                        </div>
                        
                    </div>
                </div>                                  
            </div>
        )
    }

}

export default Footer