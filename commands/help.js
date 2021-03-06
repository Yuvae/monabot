const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async (client, message, args) => {

    // try {

    //     var text = "**YT BOT** \n\n **__Commands__** \n !hallo - Geeft een hallo terug. \n !info - Geeft info.";

    //     message.author.send(text);

    //     message.reply("Alle commands kan je vinden in je prive berichten");

    // } catch (error) {
    //     message.reply("Er is iets fout gelopen");
    // }

    var commandList = [];
    var prefix = botConfig.prefix;

    client.commands.forEach(command => {

        var constructor = {
            name: command.help.name,
            description: command.help.description,
            category: command.help.category
        }

        commandList.push(constructor);

    });

    var response = "**Commande de Mona**\n\n";
    var general = "π πππ‘ππ₯ππ π\n";
    var donjon = "π ππ’π‘ππ’π‘ π\n";
    var info = "\n__Fiche des personnages__\n";
    var pyro = "\nπ₯ π£π¬π₯π’ π₯\n";
    var hydro = "\nπ§ ππ¬ππ₯π’ π§\n";
    var cryo = "\nβοΈ ππ₯π¬π’ βοΈ\n";
    var electro = "\nβ‘ πππππ§π₯π’ β‘\n";
    var anemo = "\nπ«οΈ ππ‘ππ π’ π«οΈ\n";
    var geo = "\nπ» πππ’ π»\n";
    var dendro = "\nπΈ πππ‘ππ₯π’ πΈ\n";

    for (let i = 0; i < commandList.length; i++) {
        const command = commandList[i];

        if (command["category"] == "GΓ©nΓ©ral") {

            general += `${prefix}${command["name"]} - ${command["description"]}\n`;

        } else if(command["category"] == "donjon"){

            donjon += `${prefix}${command["name"]} - ${command["description"]}\n`;

        } else if(command["category"] == "Fiche des personnages"){

            info += `${prefix}${command["name"]} - ${command["description"]}\n`;

        } else if(command["category"] == "pyro"){

            pyro += `${prefix}${command["name"]} - ${command["description"]}\n`;

        }else if(command["category"] == "hydro"){

            hydro += `${prefix}${command["name"]} - ${command["description"]}\n`;

        }else if(command["category"] == "cryo"){

            cryo += `${prefix}${command["name"]} - ${command["description"]}\n`;

        }else if(command["category"] == "electro"){

            electro += `${prefix}${command["name"]} - ${command["description"]}\n`;

        }else if(command["category"] == "anemo"){

            anemo += `${prefix}${command["name"]} - ${command["description"]}\n`;

        }else if(command["category"] == "geo"){

            geo += `${prefix}${command["name"]} - ${command["description"]}\n`;

        }else if(command["category"] == "dendro"){

            dendro += `${prefix}${command["name"]} - ${command["description"]}\n`;

        }
        
    }

    response += general;
    response += donjon;
    response += info;
    response += pyro;
    response += hydro;
    response += cryo;
    response += electro;
    response += anemo;
    response += geo;
    response += dendro;

    message.author.send(response).then(() => {
        message.channel.send("Toutes les commandes sont dans vos messages privΓ©s! :");
    }).catch(() => {
        message.channel.send("Vos messages privΓ©s sont dΓ©sactivΓ©s, vous n'avez donc rien reΓ§u.");
    });

}

module.exports.help = {
    name: "help",
    description: "Donne toutes les diffΓ©rentes commandes",
    category: "Algemeen"
}