"use client";
import ProfileCard from "@/componentes/CartaPerfil.jsx";

export default function Devs() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 w-full max-w-4xl">
        <a
          href="https://github.com/santiskrr"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-md mx-auto sm:mx-0"
        >
          <ProfileCard
            name="Santiskrr"
            title="Software Engineer"
            handle="Santicodes"
            status="Online"
            contactText="Contact Me"
            avatarUrl="https://media.istockphoto.com/id/1142192548/es/vector/perfil-de-avatar-hombre-silueta-de-cara-masculina-o-icono-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=O6KtgzjlrIvoGi2Cb1ZyppWKlqGL_5IXVHLUdLN33Ag="
            showUserInfo={true}
            enableTilt={true} behindGradient={undefined} innerGradient={undefined} miniAvatarUrl={undefined} onContactClick={undefined}          />
        </a>
        <a
          href="https://github.com/Ale754-bot"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-md mx-auto sm:mx-0"
        >
          <ProfileCard
            name="Alebot"
            title="Software Engineer"
            handle="Alecodes"
            status="Online"
            contactText="Contact Me"
            avatarUrl="https://media.istockphoto.com/id/1142192548/es/vector/perfil-de-avatar-hombre-silueta-de-cara-masculina-o-icono-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=O6KtgzjlrIvoGi2Cb1ZyppWKlqGL_5IXVHLUdLN33Ag="
            showUserInfo={true}
            enableTilt={true} behindGradient={undefined} innerGradient={undefined} miniAvatarUrl={undefined} onContactClick={undefined}          />
        </a>
      </div>
    </div>
  );
}