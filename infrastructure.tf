provider "aws" {
  region = "us-east-1"  
}

resource "aws_instance" "app_server" {
  ami           = "ami-0c55b159cbfafe1f0"  # Replace with an Amazon Linux 2 AMI ID or your preferred AMI
  instance_type = "t2.micro"
  key_name      = "your-ssh-key"  # Replace with your SSH key name

  security_group {
    name_prefix = "webapp-sg"

    egress {
      cidr_blocks = ["0.0.0.0/0"]
      from_port   = 0
      to_port     = 0
      protocol    = "tcp"
    }

    ingress {
      cidr_blocks = ["0.0.0.0/0"]
      from_port   = 22
      to_port     = 22
      protocol    = "tcp"
    }

    ingress {
      cidr_blocks = ["0.0.0.0/0"]
      from_port   = 80
      to_port     = 80
      protocol    = "tcp"
    }
  }

  tags = {
    Name = "WebAppServer"
  }
}
