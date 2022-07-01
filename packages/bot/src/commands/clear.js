import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed } from 'discord.js';

export default class Clear {
  constructor(client) {
    this.client = client;
    this.name = 'clear';
    this.description = 'Komutun kullanıldığı kanaldaki tüm mesajları siler.';
    this.permission = 'BAN_MEMBERS';
    this.data = new SlashCommandBuilder()
      .setName(this.name)
      .setDescription(this.description)
      .addIntegerOption(option =>
        option
          .setName('sayı')
          .setDescription('Silinmesini istediğiniz mesaj adeti. (1 - 100)')
          .setMaxValue(100)
          .setMinValue(1),
      );
  }

  run = interaction => {
    let count = interaction.options._hoistedOptions[0]?.value || 100;
    interaction.channel.bulkDelete(count, { filterOld: true });

    let embed = new MessageEmbed().setDescription(`\`${count}\` adet mesaj başarıyla silindi.`);
    interaction.reply({ embeds: [embed], ephemeral: true });
  };
}
