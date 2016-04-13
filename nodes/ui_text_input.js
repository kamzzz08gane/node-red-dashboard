module.exports = function(RED) {
    var ui = require('../ui')(RED);

    function TextInputNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        var tab = RED.nodes.getNode(config.tab);
        var group = RED.nodes.getNode(config.group);
        if (!tab || !group) return;

        var done = ui.add({
            node: node,
            tab: tab,
            group: group,
            control: {
                type: 'text-input',
                label: config.label,
                mode:  config.mode,
                delay: config.delay,
                order: config.order,
                value: '',
				width: config.width,
				height: config.height
            },
            beforeSend: function (msg) {
                msg.topic = config.topic;
            },
        });

        node.on("close", done);
    }

    RED.nodes.registerType("ui_text_input", TextInputNode);
};
