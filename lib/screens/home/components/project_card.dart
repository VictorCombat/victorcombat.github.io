import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:web_portfolio/models/Project.dart';
import 'package:web_portfolio/models/SelectedProjectModel.dart';
import 'package:web_portfolio/responsive.dart';

import '../../../constants.dart';

class ProjectCard extends StatelessWidget {
  const ProjectCard({
    Key? key,
    required this.project,
    required this.id,
  }) : super(key: key);

  final int id;
  final Project project;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(defaultPadding),
      color: secondaryColor,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            project.title!,
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
            style:
                Theme.of(context).textTheme.subtitle2!.copyWith(fontSize: 20.0),
          ),
          Spacer(),
          Text(
            project.shortDescription!,
            maxLines: Responsive.isMobileLarge(context) ? 3 : 4,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(height: 1.5, fontSize: 18.0),
          ),
          Spacer(),
          TextButton(
            onPressed: () {
              Provider.of<SelectedProjectModel>(context, listen: false)
                  .selectProject(project);
            },
            child: Text(
              "Read More >>",
              style: TextStyle(
                color: primaryColor,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
