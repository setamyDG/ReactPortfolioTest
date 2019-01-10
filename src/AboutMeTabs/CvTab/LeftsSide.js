import React, { Component } from 'react';

class LeftSide extends Component {
    render() {
        return(
            <div>
                <div style={{textAlign: 'center'}}>
                    <img
                        src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                        alt="avatar"
                        style={{height: '200px',}}
                    />
                </div>
                <h2 className="single-text-black" style={{paddingTop: '1em', textAlign: 'center'}}>Daniel Gola</h2>
                <h4 className="single-text-black" style={{color: 'grey', textAlign: 'center'}}> programmer</h4>
                <hr style ={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                 <p className="single-text-black">
                 OPISOPISOPISOPISOPISOPISOPISOPISOPISOPISOPISOPISOPISOPISOPIS
                     OPISOPISOPISOPISOPISOPISOPISOPISOPISOPISOPISOPISOPISOPISOS
                OPISOPISOPISOPISOPISOPISOPISOPISOPISOPISOPIS
                OPISOPISOPISOPISOPISOPISOPISOPISOPISOPISOPISOPISOPISOPIS
                OPISOPISOPISOPISOPISOPISOPISOPISOPISOPISOPISOPIS
                </p>
                <hr style ={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                <h5 className="single-text-black">Adress</h5>
                <p className="single-text-black">1 Zielona Góra - ul. Zawada krótka 1</p>
                <h5 className="single-text-black">Phone</h5>
                <p className="single-text-black">725-151-351</p>
                <h5 className="single-text-black">Web</h5>
                <p className="single-text-black">mywebsite.com</p>
                <h5 className="single-text-black">Email</h5>
                <p className="single-text-black">setamy.dg@gmail.com</p>
                <hr style ={{borderTop: '3px solid #833fb2', width: '50%'}}/>

            </div>

            )
        }
}

export default LeftSide;