# World Cup 22' Fantasy

## Versión: 1.0.0

---

Proyecto realizado para participar en el concurso de [Codealo](https://www.codealo.dev) y [DonWeb](https://donweb.com/): [Hack and Gol](https://www.codealo.dev/concurso-hackandgol).

Es una página web con temática de la Copa Mundial de la FIFA Qatar 2022, y cuenta con las siguientes funciones:

- Ver todos los resultados del Mundial, así como días de cada partido y el estadio (Resultados no son en tiempo real).
- Crear tu propio equipo Fantasy con los jugadores disponibles para el Mundial Qatar 2022.

## Tareas pendientes

- [x] Conectar con API de Notion para resultados del Mundial.
- [ ] Mostrar horarios de partidos en TimeZone local (originalmente se muestran con horario de Qatar).
- [ ] Conectar con API de Notion para jugadores del Fantasy.
- [ ] Crear cuenta e iniciar sesión para el Fantasy.
- [ ] Guardar información del Fantasy.
- [ ] Versión Mobile.

## Configuración

Instalar las dependencias:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Copiar las Variables de Entorno

Usar como ejemplo el archivo `.env.example` para añadir tus propias variables.

## Servidor de desarrollo

Inicia el servidor de desarrollo en [localhost:3000](http://localhost:3000)

```bash
npm run dev
```
