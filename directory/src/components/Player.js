import Button from 'react-bootstrap/Button';
import EditPlayer from './EditPlayer'
import PlayerStats from './PlayerStats'

function Player (props) {
    {/* Notes */}     
return(
<div className="m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img className="object-cover rounded-full h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={props.img} alt="User Avatar" />
  <div className="text-center space-y-2 sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg text-black font-semibold">
        {props.fname}
        <br></br>
        {props.lname}
      </p>
      <p class="text-slate-500 font-medium">
        {props.position}
      </p>
    </div>   
    <PlayerStats
    id={props.id}
    fname={props.fname}
    lname={props.lname}
    position={props.position}
    />
  </div>
</div>
)}

export default Player;