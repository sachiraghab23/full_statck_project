import React from 'react'

export default function Contact() {
  return (
    <>
      <div className="container" style={{ marginTop: '50px' }}>
        <div className="row">
          <div className="col-md-6">
            <h1>
              Yummy Plaza
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam natus unde optio mollitia! Voluptate, voluptatem incidunt delectus deserunt tenetur aut natus eveniet, molestiae laborum minima excepturi modi iure facilis recusandae pariatur beatae maiores quibusdam, quo distinctio illum? Ullam dicta vel ad voluptatum vitae rerum, quae molestias facilis, quasi beatae dolorem maiores adipisci eveniet velit quo repudiandae obcaecati sit veniam?</p>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th className='bg-warning text-center' colSpan={3}>--- Contact Details ---</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <i class="fab fa-telephone-fill"></i>
                  </td>
                  <td>Phone</td>
                  <td>0123-433433</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>
                    <i class="fa fa-whatsapp"></i>
                  </td>
                  <td>Whatsap</td>
                  <td>0123-433433</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>
                    <i class="fa fa-envelope"></i>
                  </td>
                  <td>Email</td>
                  <td>contact@yummyplaza.com</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>
                    <i class="fab fa-twitter"></i>
                  </td>
                  <td>Twitter</td>
                  <td>YummyPlaza@twitter.com</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>
                    <i class="fab fa-facebook"></i>
                  </td>
                  <td>Facebook</td>
                  <td>YummyPlaza@facebook.com</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>
                    <i class="fab fa-instagram"></i>
                  </td>
                  <td>Instagram</td>
                  <td>YummyPlaza@instagram.com</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-6">
            <img src="https://images.unsplash.com/photo-1589010588553-46e8e7c21788?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGRlbGl2ZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </>
  )
}
