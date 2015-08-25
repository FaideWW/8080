/**
 * Created by faide on 8/24/2015.
 */

import { hex } from './utils.js';

export const DisassembleOp = function(byteBuffer, pc) {
  'use strict';

  const byteOffset = hex(pc.toString(16), 4);
  let opBytes = 1;
  let opStr = '';

  switch (byteBuffer[pc]) {
    case 0x00:
    case 0x08:
    case 0x10:
    case 0x18:
    case 0x20:
    case 0x28:
    case 0x30:
    case 0x38:
      opStr = `NOP`;
      break;
    case 0x01:
      opStr = `LXI    B,#$${hex([byteBuffer[pc + 2], byteBuffer[pc + 1]], 4)}`;
      opBytes = 3;
      break;
    case 0x02:
      opStr = `STAX   B`;
      break;
    case 0x03:
      opStr = `INX    B`;
      break;
    case 0x04:
      opStr = `INR    B`;
      break;
    case 0x05:
      opStr = `DCR    B`;
      break;
    case 0x06:
      opStr = `MVI    B,#$${hex(byteBuffer[pc + 1])}`;
      opBytes = 2;
      break;
    case 0x07:
      opStr = `RLC`;
      break;
    case 0x09:
      opStr = `DAD    B`;
      break;
    case 0x0a:
      opStr = `LDAX   B`;
      break;
    case 0x0b:
      opStr = `DCX    B`;
      break;
    case 0x0c:
      opStr = `INR    C`;
      break;
    case 0x0d:
      opStr = `DCR    C`;
      break;
    case 0x0e:
      opStr = `MVI    C,#$${hex(byteBuffer[pc + 1])}`;
      opBytes = 2;
      break;
    case 0x0f:
      opStr = `RRC`;
      break;
    case 0x11:
      opStr = `LXI    D,#$${hex([byteBuffer[pc + 2], byteBuffer[pc + 1]], 4)}`;
      opBytes = 3;
      break;
    case 0x12:
      opStr = `STAX   D`;
      break;
    case 0x13:
      opStr = `INX    D`;
      break;
    case 0x14:
      opStr = `INR    D`;
      break;
    case 0x15:
      opStr = `DCR    D`;
      break;
    case 0x16:
      opStr = `MVI    D,#$${hex(byteBuffer[pc + 1])}`;
      opBytes = 2;
      break;
    case 0x17:
      opStr = `RAL`;
      break;
    case 0x19:
      opStr = `DAD    D`;
      break;
    case 0x1a:
      opStr = `LDAX   D`;
      break;
    case 0x1b:
      opStr = `DCX    D`;
      break;
    case 0x1c:
      opStr = `INR    E`;
      break;
    case 0x1d:
      opStr = `DCR    E`;
      break;
    case 0x1e:
      opStr = `MVI    E,#$${hex(byteBuffer[pc + 1])}`;
      break;
    case 0x1f:
      opStr = `RAR`;
      break;

    case 0x21:
      opStr = `LXI    H,#$${hex([byteBuffer[pc + 2], byteBuffer[pc + 1]], 4)}`;
      opBytes = 3;
      break;
    case 0x22:
      opStr = `SHLD   #$${hex([byteBuffer[pc + 2], byteBuffer[pc + 1]], 4)}`;
      opBytes = 3;
      break;
    case 0x23:
      opStr = `INX    H`;
      break;
    case 0x24:
      opStr = `INR    H`;
      break;
    case 0x25:
      opStr = `DCR    H`;
      break;
    case 0x26:
      opStr = `MVI    H,#$${hex(byteBuffer[pc + 1])}`;
      break;
    case 0x27:
      opStr = `DAA`;
      break;
    case 0x29:
      opStr = `DAD    H`;
      break;
    case 0x2a:
      opStr = `LHLD   #$${hex([byteBuffer[pc + 2], byteBuffer[pc + 1]], 4)}`;
      opBytes = 3;
      break;
    case 0x2b:
      opStr = `DCX    H`;
      break;
    case 0x2c:
      opStr = `INR    L`;
      break;
    case 0x2d:
      opStr = `DCR    L`;
      break;
    case 0x2e:
      opStr = `MVI    L,#$${hex(byteBuffer[pc + 2])}`;
      opBytes = 2;
      break;
    case 0x2f:
      opStr = `CMA`;
      break;

    case 0x31:
      opStr = `LXI    SP,#$${hex([byteBuffer[pc + 2], byteBuffer[pc + 1]], 4)}`;
      opBytes = 3;
      break;
    case 0x32:
      opStr = `STA    #$${hex([byteBuffer[pc + 2], byteBuffer[pc + 1]], 4)}`;
      opBytes = 3;
      break;
    case 0x33:
      opStr = `INX    SP`;
      break;
    case 0x34:
      opStr = `INR    M`;
      break;
    case 0x35:
      opStr = `DCR    M`;
      break;
    case 0x36:
      opStr = `MVI    M,#$${hex(byteBuffer[pc + 1])}`;
      opBytes = 2;
      break;
    case 0x37:
      opStr = `STC`;
      break;
    case 0x39:
      opStr = `DAD    SP`;
      break;
    case 0x3a:
      opStr = `LDA    #$${hex([byteBuffer[pc + 2], byteBuffer[pc + 1]], 4)}`;
      opBytes = 3;
      break;
    case 0x3b:
      opStr = `DCX    SP`;
      break;
    case 0x3c:
      opStr = `INR    A`;
      break;
    case 0x3d:
      opStr = `DCR    A`;
      break;
    case 0x3e:
      opStr = `MVI    A,#$${hex(byteBuffer[pc + 1])}`;
      opBytes = 2;
      break;
    case 0x3f:
      opStr = `CMC`;
      break;

    case 0x40:
      opStr = `MOV    B,B`;
      break;
    case 0x41:
      opStr = `MOV    B,C`;
      break;
    case 0x42:
      opStr = `MOV    B,D`;
      break;
    case 0x43:
      opStr = `MOV    B,E`;
      break;
    case 0x44:
      opStr = `MOV    B,H`;
      break;
    case 0x45:
      opStr = `MOV    B,L`;
      break;
    case 0x46:
      opStr = `MOV    B,M`;
      break;
    case 0x47:
      opStr = `MOV    B,A`;
      break;
    case 0x48:
      opStr = `MOV    C,B`;
      break;
    case 0x49:
      opStr = `MOV    C,C`;
      break;
    case 0x4a:
      opStr = `MOV    C,D`;
      break;
    case 0x4b:
      opStr = `MOV    C,E`;
      break;
    case 0x4c:
      opStr = `MOV    C,H`;
      break;
    case 0x4d:
      opStr = `MOV    C,L`;
      break;
    case 0x4e:
      opStr = `MOV    C,M`;
      break;
    case 0x4f:
      opStr = `MOV    C,A`;
      break;

    case 0x50:
      opStr = `MOV    D,B`;
      break;
    case 0x51:
      opStr = `MOV    D,C`;
      break;
    case 0x52:
      opStr = `MOV    D,D`;
      break;
    case 0x53:
      opStr = `MOV    D,E`;
      break;
    case 0x54:
      opStr = `MOV    D,H`;
      break;
    case 0x55:
      opStr = `MOV    D,L`;
      break;
    case 0x56:
      opStr = `MOV    D,M`;
      break;
    case 0x57:
      opStr = `MOV    D,A`;
      break;
    case 0x58:
      opStr = `MOV    E,B`;
      break;
    case 0x59:
      opStr = `MOV    E,C`;
      break;
    case 0x5a:
      opStr = `MOV    E,D`;
      break;
    case 0x5b:
      opStr = `MOV    E,E`;
      break;
    case 0x5c:
      opStr = `MOV    E,H`;
      break;
    case 0x5d:
      opStr = `MOV    E,L`;
      break;
    case 0x5e:
      opStr = `MOV    E,M`;
      break;
    case 0x5f:
      opStr = `MOV    E,A`;
      break;

    case 0x60:
      opStr = `MOV    H,B`;
      break;
    case 0x61:
      opStr = `MOV    H,C`;
      break;
    case 0x62:
      opStr = `MOV    H,D`;
      break;
    case 0x63:
      opStr = `MOV    H,E`;
      break;
    case 0x64:
      opStr = `MOV    H,H`;
      break;
    case 0x65:
      opStr = `MOV    H,L`;
      break;
    case 0x66:
      opStr = `MOV    H,M`;
      break;
    case 0x67:
      opStr = `MOV    H,A`;
      break;
    case 0x68:
      opStr = `MOV    L,B`;
      break;
    case 0x69:
      opStr = `MOV    L,C`;
      break;
    case 0x6a:
      opStr = `MOV    L,D`;
      break;
    case 0x6b:
      opStr = `MOV    L,E`;
      break;
    case 0x6c:
      opStr = `MOV    L,H`;
      break;
    case 0x6d:
      opStr = `MOV    L,L`;
      break;
    case 0x6e:
      opStr = `MOV    L,M`;
      break;
    case 0x6f:
      opStr = `MOV    L,A`;
      break;

    case 0x70:
      opStr = `MOV    M,B`;
      break;
    case 0x71:
      opStr = `MOV    M,C`;
      break;
    case 0x72:
      opStr = `MOV    M,D`;
      break;
    case 0x73:
      opStr = `MOV    M,E`;
      break;
    case 0x74:
      opStr = `MOV    M,H`;
      break;
    case 0x75:
      opStr = `MOV    M,L`;
      break;
    case 0x76:
      opStr = `HLT`;
      break;
    case 0x77:
      opStr = `MOV    M,A`;
      break;
    case 0x78:
      opStr = `MOV    A,B`;
      break;
    case 0x79:
      opStr = `MOV    A,C`;
      break;
    case 0x7a:
      opStr = `MOV    A,D`;
      break;
    case 0x7b:
      opStr = `MOV    A,E`;
      break;
    case 0x7c:
      opStr = `MOV    A,H`;
      break;
    case 0x7d:
      opStr = `MOV    A,L`;
      break;
    case 0x7e:
      opStr = `MOV    A,M`;
      break;
    case 0x7f:
      opStr = `MOV    A,A`;
      break;

    case 0x80:
      opStr = `ADD    B`;
      break;
    case 0x81:
      opStr = `ADD    C`;
      break;
    case 0x82:
      opStr = `ADD    D`;
      break;
    case 0x83:
      opStr = `ADD    E`;
      break;
    case 0x84:
      opStr = `ADD    H`;
      break;
    case 0x85:
      opStr = `ADD    L`;
      break;
    case 0x86:
      opStr = `ADD    M`;
      break;
    case 0x87:
      opStr = `ADD    A`;
      break;
    case 0x88:
      opStr = `ADC    B`;
      break;
    case 0x89:
      opStr = `ADC    C`;
      break;
    case 0x8a:
      opStr = `ADC    D`;
      break;
    case 0x8b:
      opStr = `ADC    E`;
      break;
    case 0x8c:
      opStr = `ADC    H`;
      break;
    case 0x8d:
      opStr = `ADC    L`;
      break;
    case 0x8e:
      opStr = `ADC    M`;
      break;
    case 0x8f:
      opStr = `ADC    A`;
      break;

    case 0x90:
      opStr = `SUB    B`;
      break;
    case 0x91:
      opStr = `SUB    C`;
      break;
    case 0x92:
      opStr = `SUB    D`;
      break;
    case 0x93:
      opStr = `SUB    E`;
      break;
    case 0x94:
      opStr = `SUB    H`;
      break;
    case 0x95:
      opStr = `SUB    L`;
      break;
    case 0x96:
      opStr = `SUB    M`;
      break;
    case 0x97:
      opStr = `SUB    A`;
      break;
    case 0x98:
      opStr = `SBB    B`;
      break;
    case 0x99:
      opStr = `SBB    C`;
      break;
    case 0x9a:
      opStr = `SBB    D`;
      break;
    case 0x9b:
      opStr = `SBB    E`;
      break;
    case 0x9c:
      opStr = `SBB    H`;
      break;
    case 0x9d:
      opStr = `SBB    L`;
      break;
    case 0x9e:
      opStr = `SBB    M`;
      break;
    case 0x9f:
      opStr = `SBB    A`;
      break;

    case 0xa0:
      opStr = `ANA    B`;
      break;
    case 0xa1:
      opStr = `ANA    C`;
      break;
    case 0xa2:
      opStr = `ANA    D`;
      break;
    case 0xa3:
      opStr = `ANA    E`;
      break;
    case 0xa4:
      opStr = `ANA    H`;
      break;
    case 0xa5:
      opStr = `ANA    L`;
      break;
    case 0xa6:
      opStr = `ANA    M`;
      break;
    case 0xa7:
      opStr = `ANA    A`;
      break;
    case 0xa8:
      opStr = `XRA    B`;
      break;
    case 0xa9:
      opStr = `XRA    C`;
      break;
    case 0xaa:
      opStr = `XRA    D`;
      break;
    case 0xab:
      opStr = `XRA    E`;
      break;
    case 0xac:
      opStr = `XRA    H`;
      break;
    case 0xad:
      opStr = `XRA    L`;
      break;
    case 0xae:
      opStr = `XRA    M`;
      break;
    case 0xaf:
      opStr = `XRA    A`;
      break;

    case 0xb0:
      opStr = `ORA    B`;
      break;
    case 0xb1:
      opStr = `ORA    C`;
      break;
    case 0xb2:
      opStr = `ORA    D`;
      break;
    case 0xb3:
      opStr = `ORA    E`;
      break;
    case 0xb4:
      opStr = `ORA    H`;
      break;
    case 0xb5:
      opStr = `ORA    L`;
      break;
    case 0xb6:
      opStr = `ORA    M`;
      break;
    case 0xb7:
      opStr = `ORA    A`;
      break;
    case 0xb8:
      opStr = `CMP    B`;
      break;
    case 0xb9:
      opStr = `CMP    C`;
      break;
    case 0xba:
      opStr = `CMP    D`;
      break;
    case 0xbb:
      opStr = `CMP    E`;
      break;
    case 0xbc:
      opStr = `CMP    H`;
      break;
    case 0xbd:
      opStr = `CMP    L`;
      break;
    case 0xbe:
      opStr = `CMP    M`;
      break;
    case 0xbf:
      opStr = `CMP    A`;
      break;

    case 0xc0:
      opStr = `RNZ`;
      break;
    case 0xc1:
      opStr = `POP    B`;
      break;
    case 0xc2:
      opStr = `JNZ    #$${hex([byteBuffer[pc + 2], byteBuffer[pc + 1]], 4)}`;
      opBytes = 3;
      break;
    case 0xc3:
    case 0xcb:
      opStr = `JMP    #$${hex([byteBuffer[pc + 2], byteBuffer[pc + 1]], 4)}`;
      opBytes = 3;
      break;
    case 0xc4:
      opStr = `CNZ    #$${hex([byteBuffer[pc + 2], byteBuffer[pc + 1]], 4)}`;
      opBytes = 3;
      break;
    case 0xc5:
      opStr = `PUSH   B`;
      break;
    case 0xc6:
      opStr = `ADI    #$${hex(byteBuffer[pc + 1])}`;
      opBytes = 2;
      break;
    case 0xc7:
      opStr = `RST    0`;
      break;
    case 0xc8:
      opStr = `RZ`;
      break;
    case 0xc9:
    case 0xd9:
      opStr = `RET`;
      break;
    case 0xca:
      opStr = `JZ     #$${hex([byteBuffer[pc + 2], byteBuffer[pc + 1]], 4)}`;
      opBytes = 3;
      break;
    case 0xcc:
      opStr = `CZ     #$${hex([byteBuffer[pc + 2], byteBuffer[pc + 1]], 4)}`;
      opBytes = 3;
      break;
    case 0xcd:
    case 0xdd:
      opStr = `CALL   #$${hex([byteBuffer[pc + 2], byteBuffer[pc + 1]], 4)}`;
      opBytes = 3;
      break;
    case 0xce:
      opStr = `ACI    #$${hex(byteBuffer[pc + 1])}`;
      opBytes = 2;
      break;
    case 0xcf:
      opStr = `RST    1`;
      break;

    case 0xd0:
      opStr = `RNC`;
      break;
    case 0xd1:
      opStr = `POP    D`;
      break;
    case 0xd2:
      opStr = `JNC    #$${hex([byteBuffer[pc + 2], byteBuffer[pc + 1]], 4)}`;
      opBytes = 3;
      break;
    case 0xd3:
      opStr = `OUT    #$${hex(byteBuffer[pc + 1])}`;
      opBytes = 2;
      break;
    case 0xd4:
      opStr = `CNC    #$${hex([byteBuffer[pc + 2], byteBuffer[pc + 1]], 4)}`;
      opBytes = 3;
      break;
    case 0xd5:
      opStr = `PUSH   D`;
      break;
    case 0xd6:
      opStr = `SUI    #$${hex(byteBuffer[pc + 1])}`;
      opBytes = 2;
      break;
    case 0xd7:
      opStr = `RST    2`;
      break;
    case 0xd8:
      opStr = `RC`;
      break;
    case 0xda:
      opStr = `JC     #$${hex([byteBuffer[pc + 2], byteBuffer[pc + 1]], 4)}`;
      opBytes = 3;
      break;
    case 0xdb:
      opStr = `IN    #$${hex(byteBuffer[pc + 1])}`;
      opBytes = 2;
      break;
    case 0xdc:
      opStr = `CC     #$${hex([byteBuffer[pc + 2], byteBuffer[pc + 1]], 4)}`;
      opBytes = 3;
      break;
    case 0xde:
      opStr = `SBI    #$${hex(byteBuffer[pc + 1])}`;
      opBytes = 2;
      break;
    case 0xdf:
      opStr = `RST    3`;
      break;

    case 0xe0:
      opStr = `RPO`;
      break;
    case 0xe1:
      opStr = `POP    H`;
      break;
    case 0xe2:
      opStr = `JPO    #$${hex([byteBuffer[pc + 2], byteBuffer[pc + 1]], 4)}`;
      opBytes = 3;
      break;
    case 0xe3:
      opStr = `XTHL`;
      break;
    case 0xe4:
      opStr = `CPO    #$${hex([byteBuffer[pc + 2], byteBuffer[pc + 1]], 4)}`;
      opBytes = 3;
      break;
    case 0xe5:
      opStr = `PUSH   H`;
      break;
    case 0xe6:
      opStr = `ANI    #$${hex(byteBuffer[pc + 1])}`;
      opBytes = 2;
      break;
    case 0xe7:
      opStr = `RST    4`;
      break;
    case 0xe8:
      opStr = `RPE`;
      break;
    case 0xe9:
      opStr = `PCHL`;
      opBytes = 3;
      break;
    case 0xea:
      opStr = `JPE    #$${hex([byteBuffer[pc + 2], byteBuffer[pc + 1]], 4)}`;
      opBytes = 3;
      break; case 0xeb:
      opStr = `XCHG`;
      break;
    case 0xec:
      opStr = `CPE    #$${hex([byteBuffer[pc + 2], byteBuffer[pc + 1]], 4)}`;
      opBytes = 3;
      break;
    case 0xee:
      opStr = `XRI    #$${hex(byteBuffer[pc + 1])}`;
      opBytes = 2;
      break;
    case 0xef:
      opStr = `RST    5`;
      break;

    case 0xf0:
      opStr = `RP`;
      break;
    case 0xf1:
      opStr = `POP    PSW`;
      break;
    case 0xf2:
      opStr = `JP     #$${hex([byteBuffer[pc + 2], byteBuffer[pc + 1]], 4)}`;
      opBytes = 3;
      break;
    case 0xf3:
      opStr = `DI`;
      break;
    case 0xf4:
      opStr = `CP     #$${hex([byteBuffer[pc + 2], byteBuffer[pc + 1]], 4)}`;
      opBytes = 3;
      break;
    case 0xf5:
      opStr = `PUSH   PSW`;
      break;
    case 0xf6:
      opStr = `ORI    #$${hex(byteBuffer[pc + 1])}`;
      opBytes = 2;
      break;
    case 0xf7:
      opStr = `RST    6`;
      break;
    case 0xf8:
      opStr = `RM`;
      break;
    case 0xf9:
      opStr = `SPHL`;
      opBytes = 3;
      break;
    case 0xfa:
      opStr = `JM     #$${hex([byteBuffer[pc + 2], byteBuffer[pc + 1]], 4)}`;
      opBytes = 3;
      break;
    case 0xfb:
      opStr = `EI`;
      break;
    case 0xfc:
      opStr = `CM     #$${hex([byteBuffer[pc + 2], byteBuffer[pc + 1]], 4)}`;
      opBytes = 3;
      break;
    case 0xfe:
      opStr = `CPI    #$${hex(byteBuffer[pc + 1])}`;
      opBytes = 2;
      break;
    case 0xff:
      opStr = `RST    7`;
      break;

  }

  console.log(`${byteOffset} ${opStr}`);

  return opBytes;

};
