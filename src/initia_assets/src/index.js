import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as initia_idl, canisterId as initia_id } from 'dfx-generated/initia';

const agent = new HttpAgent();
const initia = Actor.createActor(initia_idl, { agent, canisterId: initia_id });

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  const greeting = await initia.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
