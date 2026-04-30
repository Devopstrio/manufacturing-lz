resource "aws_eks_cluster" "edge_aggregator" {
  name     = "mfg-edge-aggregator-${var.env}"
  role_arn = var.eks_role_arn

  vpc_config {
    subnet_ids = var.private_subnet_ids
  }
}

resource "aws_eks_node_group" "edge_aggregator_nodes" {
  cluster_name    = aws_eks_cluster.edge_aggregator.name
  node_group_name = "edge-agg-workers"
  node_role_arn   = var.node_role_arn
  subnet_ids      = var.private_subnet_ids

  scaling_config {
    desired_size = 3
    max_size     = 10
    min_size     = 3
  }

  instance_types = ["c6i.xlarge"] // High compute for telemetry processing
}
