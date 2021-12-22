import './GetTime.css'
import getTime from '../../utils/ajax-utils';

const GetTime = () => {
  function printTime(){
    getTime.getTime();
  }
  return (
    <button onClick={printTime}>Get Time</button>
  );
}

export default GetTime;