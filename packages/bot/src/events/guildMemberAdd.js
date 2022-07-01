import { Colors, Guild } from '@cuttingedge/utility';
import { MessageEmbed } from 'discord.js';

export default class GuildMemberAdd {
  constructor(client) {
    this.client = client;
  }

  run = async member => {
    if (member.user.bot) return;

    const channel = await member.guild.channels.fetch(Guild.channels.user);

    const response = new MessageEmbed()
      .setColor(Colors.embedColors.SUCCESS)
      .setTitle('Yeni Üye Girişi!')
      .setDescription(``)
      .setThumbnail()
      .setFields(
        {
          name: '',
          value: '',
          inline: true,
        },
        {
          name: '',
          value: '',
          inline: true,
        },
      )
      .setFooter({
        text: '',
        iconURL: '',
      })
      .setTimestamp();

    channel.send({ embeds: [response] });
  };
}
