import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as initia_idl, canisterId as initia_id } from 'dfx-generated/initia';


const agentOptions = {
    host: 'http://localhost:8000',
  }

const agent = new HttpAgent(agentOptions);
const initia = Actor.createActor(initia_idl, { agent, canisterId: initia_id });

export { initia };