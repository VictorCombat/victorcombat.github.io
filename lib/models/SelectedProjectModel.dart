import 'package:flutter/cupertino.dart';
import 'package:web_portfolio/models/Project.dart';

class SelectedProjectModel extends ChangeNotifier {
  Project? selectedProject;

  void selectProject(Project newProject) {
    selectedProject = newProject;
    notifyListeners();
  }

  void setNullProject() {
    selectedProject = null;
    notifyListeners();
  }

  Project? getSelectedProject() {
    return this.selectedProject;
  }
}
