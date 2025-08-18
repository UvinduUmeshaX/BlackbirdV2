import AnimatedButton from "./AnimatedButton";


export default function Reservation() {
  return (
     <section style={{padding: '4rem 1.5rem', backgroundColor: 'black', color: 'white', position: 'relative'}}>
        <div style={{position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: '0.05', pointerEvents: 'none'}}>
         
        </div>
        <div style={{position: 'relative', zIndex: '10', maxWidth: '64rem', margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'white', fontFamily: 'BL-Melody, serif'}}>Reservations</h2>
       <div className="video-container">
      <video autoPlay loop muted playsInline style={{ height:'45rem', width:'100%', alignItems:'center'}}>
        <source src="/videos/0817.mp4" type="video/mp4" />
         Your browser does not support the video tag.
         </video>
         </div>

          <AnimatedButton href="https://www.google.com/maps/reserve/v/dine/c/p_NJo1ovpZ4?source=pa&opi=89978449&hl=si-LK&gei=4uuiaMKXBtG4seMPjr-0wAc&sourceurl=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dblackbird%2Bsg%26oq%3Dblackbird%2Bsg%26gs_lcrp%3DEgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIMCAEQIxgnGIAEGIoFMgoIAhAAGLEDGIAEMgoIAxAAGLEDGIAEMgoIBBAuGLEDGIAEMgoIBRAAGLEDGIAEMgYIBhBFGDwyBggHEEUYPNIBCDM2MjRqMGo3qAIAsAIA%26sourceid%3Dchrome%26ie%3DUTF-8&ihs=1">
            Book A Table
          </AnimatedButton>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem'}}>
            <div style={{color: 'white'}}>
              <h4 style={{fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.5rem', color: 'white', fontFamily: 'BL-Melody, serif'}}>Location</h4>
              <p style={{color: 'white', fontFamily: 'Lora, serif'}}>8 Lock Rd,Singapore<br />108936</p>
            </div>
            <div style={{color: 'white'}}>
              <h4 style={{fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.5rem', color: 'white', fontFamily: 'BL-Melody, serif'}}>Opening Hours</h4>
              <p style={{color: 'white', fontFamily: 'Lora, serif'}}>5 pm–12 am<br />(Closed on Mon)</p>
            </div>
          </div>
        </div>
      </section>
  );
}
