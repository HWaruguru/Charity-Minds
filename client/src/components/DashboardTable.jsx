const DashboardTable =()=>{
    return(<>
     <div class="table">
              <table class="table">
                <thead>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Username</th>
                  <th>Phone</th>
                  <th>DoB</th>
                  <th>Gender</th>
                </thead>

                <tbody id="tbody">
                  <tr>
                    <td>1</td>
                    <td>John</td>
                    <td>Wick</td>
                    <td>john@wick.com</td>
                    <td>johnwick</td>
                    <td>+254712345678</td>
                    <td>07/07/1970</td>
                    <td>Male</td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>Jane</td>
                    <td>Smith</td>
                    <td>jane@smith.com</td>
                    <td>janesmith</td>
                    <td>+254723456789</td>
                    <td>15/03/1985</td>
                    <td>Female</td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>Michael</td>
                    <td>Johnson</td>
                    <td>michael@johnson.com</td>
                    <td>michaelj</td>
                    <td>+254734567890</td>
                    <td>22/11/1992</td>
                    <td>Male</td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td>Sarah</td>
                    <td>Williams</td>
                    <td>sarah@williams.com</td>
                    <td>sarahw</td>
                    <td>+254745678901</td>
                    <td>08/09/1988</td>
                    <td>Female</td>
                  </tr>

                  <tr>
                    <td>5</td>
                    <td>David</td>
                    <td>Brown</td>
                    <td>david@brown.com</td>
                    <td>davidbrown</td>
                    <td>+254756789012</td>
                    <td>14/06/1995</td>
                    <td>Male</td>
                  </tr>
                </tbody>
              </table>
            </div>
    </>)
}

export {DashboardTable}