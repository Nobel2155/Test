import React from 'react'

const AirportService = () => {
  return (
    <div class="max-w-[1200px] mx-auto bg-[#F6F5F5] p-10 mb-4">

        <div class ="mb-2">
            <h1 class ="text-3xl p-1">Ariport Service</h1>
            <p class="text-xl">Get our customized tratment as a VIP to save your valuable time spended in line at the airport.</p>
        </div>
        <div class ="">
          <form>
              <div class ="flex gap-x-2">
                  <div class="">
                      <input type="text" id="departure" class="w-48 p-3 bg-white border" placeholder="Departure"/>
                  </div>
                  <div class="">
                      <input type="text" id="arrival" class="w-48 p-3 bg-white border" placeholder="Arrival"/>
                  </div>
                  <div class="">
                      <input type="date" id="service-date" class="w-48 p-3 bg-white border" />
                  </div>
                  <div class="">
                      <select id="passenger" class="w-48 p-4 bg-white border" >
                          <option>Passenger</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                      </select>
                  </div>
                  <div class="">
                      <input type="email" id="email" class="w-48 p-3 bg-white border"placeholder="Email"/>
                  </div>
              </div>
                  <div>
                      <button type="submit" class="bg-white text-base text-green-500 py-1 px-4 mt-1 rounded-md">Get Price</button>
                  </div>
          </form>
        </div>
    </div>
  )
}

export default AirportService
