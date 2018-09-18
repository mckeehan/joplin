const Folder = require('lib/models/Folder.js');
const Setting = require('lib/models/Setting.js');

class FoldersScreenUtils {

	static async refreshFolders() {
		let initialFolders = await Folder.all({
			includeConflictFolder: true,
			order: [{
				by: Setting.value('sort.folder.column'),
				dir: Setting.value('sort.folder.direction')
			}]
		});

		this.dispatch({
			type: 'FOLDER_UPDATE_ALL',
			items: initialFolders,
		});
	}

}

module.exports = { FoldersScreenUtils };
