import { InteractionManager } from '@cuttingedge/utility';
export default class Ready extends InteractionManager {
  constructor(client) {
    super();
    this.client = client;
  }
  run = () => {
    this.client.user.setActivity({
      name: 'Projects',
      type: 'WATCHING',
    });

    this.checkInteractions(this.client);
  };
}
