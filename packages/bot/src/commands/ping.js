import { Colors, MessageEmbed } from '@cuttingedge/utility';
import { SlashCommandBuilder } from '@discordjs/builders';

export default class Ping {
  constructor(client) {
    this.client = client;
    this.name = 'ping';
    this.description = 'ping';
    this.permission = 'SEND_MESSAGES';
    this.data = new SlashCommandBuilder().setName(this.name).setDescription(this.description);
  }

  run = interaction => {
    let { ws } = interaction.client;

    let discordLatency = ws.ping;
    let clientLatency = Math.abs(Date.now() - interaction.createdTimestamp);

    const response = new MessageEmbed().setColor(Colors.embedColors.SUCCESS).addFields(
      {
        name: `Discord Gecikmesi`,
        value: `${discordLatency} ms.`,
        inline: true,
      },
      {
        name: `Bot Gecikmesi`,
        value: `${clientLatency} ms.`,
        inline: true,
      },
    );

    interaction.reply({ embeds: [response] });
  };
}
