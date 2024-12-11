import Button from '../button/Button';
import './Send.css';

export default function Send() {
    return (
        <>
            <div className="coll">

                <div className='inputcon'>
                    <div className='smallcon1'>
                        <div className='incol'>
                            <div className='respo'>
                                <label className=''>Name*</label>
                                <input name='Name' className='qwe form-contral' type='text'  required></input>
                            
                            </div>
                            <div className='respo'>
                                <label className='qwe'>Email*</label>
                                <input name='Email' className='qwe form-contral' type='email' required></input>
                            </div>
                            </div>
                        <div className='incol'>
                            <div>
                                <label className='qwe'>Phone</label>
                                <input name='Phone' className='qwe form-contral' type='email'></input>
                            </div>
                            <div>
                                <label className='qwe'>Company</label>
                                <input name='Company' className='qwe form-contral' type='email' ></input>
                            </div>
                        </div>
                        <div className='inco '>
                            <label>Message</label>
                            <textarea className='messagebox' placeholder='Type Your Message Here...' name='message' rows="5"></textarea>
                        </div>
                        <div className=' largebtn qwe'>
                            <div className='button sendbtn'>Send</div> 
                        </div>
                    </div>
                </div>


                {/* <div>

                    <label for="exampleInputEmail" class="form-label">Name*</label><br></br>
                    <input type="text" name="name" className="form-control " id="exampleInputEmail" aria-describedby="emailHelp" required></input>
                    <div class="text-danger" ></div>
                </div>
                <div>

                    <label for="exampleInputEmail" class="form-label">Email*</label><br></br>
                    <input type="email" name="email" className="form-control " id="exampleInputEmail" aria-describedby="emailHelp" required></input>
                    <div class="text-danger" ></div>
                </div>
            </div>


            <div className="col">
                <div>

                    <label for="exampleInputEmail" class="form-label">Phone</label><br></br>
                    <input type="text" name="phone" className="form-control " id="exampleInputEmail" aria-describedby="emailHelp" ></input>
                    <div class="text-danger" ></div>
                </div>
                <div>

                    <label class="form-label">Company</label><br></br>
                    <input type="text" name="Company" className="form-control " id="exampleInputEmail" aria-describedby="emailHelp" ></input>
                    <div class="text-danger" ></div>
                </div>
            </div>
            <br></br>
            <div className='col'>
                <label for="messagebox" class="form-label-msg " required>Message*</label><br></br>
                <textarea type="text-area" name="messagebox" className="messagebox " id="exampleInputEmail" aria-describedby="emailHelp" ></textarea>
            </div><br></br>
            <div className='col'>
                <div id="send">Send</div> */}
            </div>
        </>

    )
}