
/*
        "◀": "previous",
        "▶": "next"
*/

const  { MessageEmbed } = require('discord.js');
const { Menu } = require('discord.js-menu');

/*
Page 1 - Aceuil
Page 2 - Commande
Page 3 - Information
*/
module.exports.run = async (bot, message, args) => {
    console.log(message)
let helpMenu = new Menu(message.channel, message.author.id, [
    {
        name: 'main',
        content: new MessageEmbed()
        .setTitle('Fiche de Noelle')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819988571267268628/PRESENTATION.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GOLD')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à deux mains`)
        .addField('Element :', 'Geo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Noelle.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819988571267268628/PRESENTATION.jpg')
        .setFooter('Page 1/6')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Noelle')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819988568114069539/maindps.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GOLD')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à deux mains`)
        .addField('Element :', 'Geo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Noelle.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819988568114069539/maindps.jpg')
        .setFooter('Page 2/6')
        ,
        reactions:{
        '◀': 'previous', 
        '▶': "next"
    }
    },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Noelle')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819988561406853120/SUPPORT.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GOLD')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à deux mains`)
        .addField('Element :', 'Geo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Noelle.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819988561406853120/SUPPORT.jpg')
        .setFooter('Page 3/6')
        ,
        reactions:{
        '◀': 'previous',
        '▶': "next"
        
    }
    },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Noelle')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819988566356525066/dniv.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GOLD')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à deux mains`)
        .addField('Element :', 'Geo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Noelle.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819988566356525066/dniv.jpg')
        .setFooter('Page 4/6')
        ,
        reactions:{
        '◀': 'previous', 
        '▶': "next"
    }
    },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Noelle')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819988563886211112/DAPP.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GOLD')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à deux mains`)
        .addField('Element :', 'Geo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Noelle.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819988563886211112/DAPP.jpg')
        .setFooter('Page 5/6')
        ,
        reactions:{
        '◀': 'previous',
        '▶': "next"
    }
    },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Noelle')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819988562967658536/armes.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK5vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAU')
        .setColor('GOLD')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à deux mains`)
        .addField('Element :', 'Geo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Noelle.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819988562967658536/armes.jpg')
        .setFooter('Page 6/6')
        ,
        reactions:{
        '◀': 'previous'
    }
    },
    ], 300000)
        helpMenu.start()
}

module.exports.help = {
    name: "pnoelle",
    description: "*Fiche de Noelle.*",
    category: "geo"
}