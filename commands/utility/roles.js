const { EmbedBuilder } = require('discord.js');

const colorEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('COLORS')
	.setDescription('@red\n@blue\n\nᴿᵉᵃᶜᵗ ᵗᵒ ᵍᶦᵛᵉ ʸᵒᵘʳˢᵉˡᶠ ᵃ ᶜᵒˡᵒʳ')
const ageEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('AGE')
	.setDescription('@18-\n@18+\n\nᴿᵉᵃᶜᵗ ᵗᵒ ᵍᶦᵛᵉ ʸᵒᵘʳˢᵉˡᶠ ᵃ ʳᵒˡᵉ')
const serverEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('SERVER')
	.setDescription('@announcements\n@chat revive\n\nᴿᵉᵃᶜᵗ ᵗᵒ ᵍᶦᵛᵉ ʸᵒᵘʳˢᵉˡᶠ ᵃ ʳᵒˡᵉ')
const locationEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('LOCATION')
	.setDescription('@na\n@eu\n@as\n\nᴿᵉᵃᶜᵗ ᵗᵒ ᵍᶦᵛᵉ ʸᵒᵘʳˢᵉˡᶠ ᵃ ʳᵒˡᵉ')

channel.send({ embeds: [colorEmbed, ageEmbed, serverEmbed] });