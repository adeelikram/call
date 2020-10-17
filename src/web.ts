import { WebPlugin } from '@capacitor/core';
import { callPlugin } from './definitions';

export class callWeb extends WebPlugin implements callPlugin {
  constructor() {
    super({
      name: 'call',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const call = new callWeb();

export { call };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(call);
