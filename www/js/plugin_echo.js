

function pluginEcho() {
    PluginEcho.prototype.echo = function(message){
        cordova.exec.(null, null, "PluginEcho", "echo", [message]);
    }
}
