const {Discord , EmbedBuilder , ApplicationCommandOptionType , PermissionsBitField} = require ("discord.js")

module.exports = {
    name: 'changename',
    description: 'Change a name of specific channel',

    options: [
        {
            name: 'channel',
            description: 'Select a channel you want to change its name',
            type: ApplicationCommandOptionType.Channel,
            required: true,


        },
        {
            name: 'name',
            description: 'Write any name for this channel',
            type: ApplicationCommandOptionType.String,
            required: true,


        },


    ],


    run: async (client, interaction) => {
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels) && !interaction.member.roles.cache.some((r) => r.name === "staff" )) return interaction.reply({content : `**<@${interaction.user.id}> You dont have permissions Or you dont have a role named with (staff)**` , ephemeral : true})

        const channel = interaction.options.getChannel("channel")
        const name = interaction.options.getString("name")
        if(!channel) return interaction.reply({content : `**Sorry this is not a channel 🤔**` , ephemeral : true})
        if(!name) return interaction.reply({content : `**Sorry this is not a name 🤔**` , ephemeral : true})
        if (name === interaction.user.id) return interaction.reply ({content : `** I cant change the name of channel to name of user **` , ephemeral : true})

        
        await channel.setName(name)

       return await interaction.reply({embeds : [new EmbedBuilder () .setDescription(`** Done set name of the ${channel.id} to \`\ ${name} \`\ Successfully ✅ **`)]})








    }



}