/**
 * Created by faide on 8/24/2015.
 */
import { DisassembleOp } from './disassembler.js';

const oReq = new XMLHttpRequest();

oReq.open('GET', 'bin/invaders.rom', true);
oReq.responseType = 'arraybuffer';

oReq.onload = function(oEvent) {
  'use strict';
  const buffer = oReq.response;
  if (buffer) {
    const byteBuffer = new Uint8Array(buffer);
    let pc = 0;

    while (pc < byteBuffer.byteLength) {
      pc += DisassembleOp(byteBuffer, pc);
    }
  }
};

oReq.send();
