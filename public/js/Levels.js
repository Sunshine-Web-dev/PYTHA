function Levels(){
    var levels = {};
    var levelNames = {};
    var dataIndices = {};

    //INTERFACE
    this.registerLevel = function(level, dataIndex, name){
        levels[level] = dataIndex;
        levelNames[level] = name;
        dataIndices[dataIndex] = level;
    }

    this.removeLevel = function(level){
        if(!levels.hasOwnProperty(level)){
            return;
        }
        delete dataIndices[levels[level]];
        delete levelNames[level];
        delete levels[level];
    }

    this.getLevel = function(dataIndex){
        if(!dataIndices.hasOwnProperty(dataIndex)){
            return;
        }
        return dataIndices[dataIndex];
    }

    this.getLevelName = function(level){
        return levelNames[level];
    }    
}