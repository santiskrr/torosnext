 "use client"
import ProfileCard from '@/componentes/CartaPerfil.jsx';
export default function Devs() {
  return (
    <>
    
    <div className="bg-black">
       <div className="flex justify-center gap-10 m-15"> 
<a href="https://github.com/santiskrr" target="_blank" rel="noopener noreferrer">
        
        <ProfileCard
        name="Santiskrr"
        title="Software Engineer"
        handle="Santicodes"
        status="Online"
        contactText="Contact Me"
        avatarUrl="https://media.istockphoto.com/id/1142192548/es/vector/perfil-de-avatar-hombre-silueta-de-cara-masculina-o-icono-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=O6KtgzjlrIvoGi2Cb1ZyppWKlqGL_5IXVHLUdLN33Ag="
        showUserInfo={true}
        enableTilt={true}
        />
        </a>

<a href="https://github.com/Ale754-bot" target="_blank" rel="noopener noreferrer">


        <ProfileCard
        name="Alebot"
        title="Software Engineer"
        handle="Alecodes"
        status="Online"
        contactText="Contact Me"
        avatarUrl="https://media.istockphoto.com/id/1142192548/es/vector/perfil-de-avatar-hombre-silueta-de-cara-masculina-o-icono-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=O6KtgzjlrIvoGi2Cb1ZyppWKlqGL_5IXVHLUdLN33Ag="
        showUserInfo={true}
        enableTilt={true}
        />
</a>
        </div>




    </div>
    
    </>


  )}