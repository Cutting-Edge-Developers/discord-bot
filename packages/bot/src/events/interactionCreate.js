import { Colors } from '@cuttingedge/utility';
import { MessageEmbed } from 'discord.js';

export default class InteractionCreate {
  constructor(client) {
    this.client = client;
  }

  run = (interaction) => {
    this.client.
    if (interaction.isCommand()) {
      let command = this.client.commands.get(interaction.commandName);
      if (command) {
        if (interaction.member.permissions.has(command.permission)) {
          try {
            command.run(interaction);
          } catch (e) {
            /* eslint-disable no-console */
            console.log(e);
          }
        } else {
          let response = new MessageEmbed()
            .setColor(Colors.embedColors.INFO)
            .setDescription(`Bu komutu kullanabilmek için \`${command.permission}\` yetkisine sahip olmalısın.`);

          interaction.reply({ embeds: [response] });
        }
      }
    }
  };
}
