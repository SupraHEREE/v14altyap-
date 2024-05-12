const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("davet")
        .setDescription("Botun davet linklerini gösterir."),

    run: async (client, interaction) => {

        const embed = new EmbedBuilder()
            .setTitle("ElitCode Bot - İstatistik!")
            .setDescription(`> **Merhaba bütün sosyal linklerimizi alttaki butonlara basarak görebilirsiniz.**`)
            .setImage("https://media.discordapp.net/attachments/991075017393569822/1202948854090301511/standard.gif?ex=65cf506c&is=65bcdb6c&hm=e3855aeee4fa7f28933782908f2cca42f8ebe548f290f2228f8246dd71c96a20&=")
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("Davet Et")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://discord.com/api/oauth2/authorize?client_id=1202951941387325440&permissions=8&scope=applications.commands+bot"),
                new ButtonBuilder()
                    .setLabel("Destek Sunucusu")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://discord.gg/elitcode"),
                new ButtonBuilder()
                    .setLabel("Oy Ver")
                    .setStyle(ButtonStyle.Link)
                    .setURL("")

            )
        interaction.reply({ embeds: [embed], components: [row] })

    },
};
